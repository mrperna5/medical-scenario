-- Scenario Table
CREATE TABLE scenario (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Patient Scenario Table
CREATE TABLE patient_scenario (
    id BIGSERIAL PRIMARY KEY,
    scenario_id BIGINT NOT NULL REFERENCES scenario(id) ON DELETE CASCADE,
    mystery_case TEXT NOT NULL,
    developments JSONB -- Array of objects for different stages
);

-- Medical Option Table
CREATE TABLE medical_option (
    id BIGSERIAL PRIMARY KEY,
    scenario_id BIGINT NOT NULL REFERENCES scenario(id) ON DELETE CASCADE,
    category VARCHAR(50) NOT NULL, -- e.g., 'history', 'examination', 'lab', 'followup'
    rubrik VARCHAR(255),
    code VARCHAR(50),
    item VARCHAR(255) NOT NULL,
    cost NUMERIC(10, 2) NOT NULL,
    doctor_time INT,
    patient_time INT,
    selected BOOLEAN DEFAULT FALSE,
    results JSONB -- Array of results for the option
);

-- Team Table
CREATE TABLE team (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Team Members Table
CREATE TABLE team_member (
    id BIGSERIAL PRIMARY KEY,
    team_id BIGINT NOT NULL REFERENCES team(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) -- Optional field to define roles like 'leader', 'member', etc.
);

-- Team Progress Table
CREATE TABLE team_progress (
    id BIGSERIAL PRIMARY KEY,
    team_id BIGINT NOT NULL REFERENCES team(id) ON DELETE CASCADE,
    scenario_id BIGINT NOT NULL REFERENCES scenario(id) ON DELETE CASCADE,
    completed BOOLEAN DEFAULT FALSE,
    progress JSONB -- Stores progress data for the scenario (e.g., selected options, scores, etc.)
);
