--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

-- Started on 2024-12-13 15:07:31

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 25794)
-- Name: medical_option; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.medical_option (
    id bigint NOT NULL,
    category character varying(50) NOT NULL,
    rubrik character varying(255),
    code character varying(50),
    item character varying(255) NOT NULL,
    cost numeric(12,2) NOT NULL,
    doctor_time integer,
    patient_time integer,
    results text,
    scenario_id bigint NOT NULL,
    selected_id bigint,
    team_progress_medical_options_id bigint
);


ALTER TABLE public.medical_option OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 25801)
-- Name: patient_scenario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.patient_scenario (
    id bigint NOT NULL,
    mystery_case text NOT NULL,
    developments text,
    scenario_id bigint NOT NULL
);


ALTER TABLE public.patient_scenario OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 25793)
-- Name: primary_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.primary_sequence
    START WITH 10000
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.primary_sequence OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 25808)
-- Name: scenario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.scenario (
    id bigint NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.scenario OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 25813)
-- Name: team; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.team (
    id bigint NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.team OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 25818)
-- Name: team_member; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.team_member (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    team_id bigint NOT NULL
);


ALTER TABLE public.team_member OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 25823)
-- Name: team_progress; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.team_progress (
    id bigint NOT NULL,
    completed boolean,
    total_cost integer,
    total_doctor_time integer,
    total_patient_time integer,
    round integer,
    team_id bigint NOT NULL,
    chosen_scenario_id bigint NOT NULL
);


ALTER TABLE public.team_progress OWNER TO postgres;

--
-- TOC entry 3196 (class 2606 OID 25800)
-- Name: medical_option pk_medicaloption; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.medical_option
    ADD CONSTRAINT pk_medicaloption PRIMARY KEY (id);


--
-- TOC entry 3198 (class 2606 OID 25807)
-- Name: patient_scenario pk_patientscenario; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patient_scenario
    ADD CONSTRAINT pk_patientscenario PRIMARY KEY (id);


--
-- TOC entry 3202 (class 2606 OID 25812)
-- Name: scenario pk_scenario; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.scenario
    ADD CONSTRAINT pk_scenario PRIMARY KEY (id);


--
-- TOC entry 3204 (class 2606 OID 25817)
-- Name: team pk_team; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.team
    ADD CONSTRAINT pk_team PRIMARY KEY (id);


--
-- TOC entry 3206 (class 2606 OID 25822)
-- Name: team_member pk_teammember; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.team_member
    ADD CONSTRAINT pk_teammember PRIMARY KEY (id);


--
-- TOC entry 3208 (class 2606 OID 25827)
-- Name: team_progress pk_teamprogress; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.team_progress
    ADD CONSTRAINT pk_teamprogress PRIMARY KEY (id);


--
-- TOC entry 3200 (class 2606 OID 25829)
-- Name: patient_scenario uc_patientscenario_scenario; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patient_scenario
    ADD CONSTRAINT uc_patientscenario_scenario UNIQUE (scenario_id);


--
-- TOC entry 3209 (class 2606 OID 25830)
-- Name: medical_option fk_medicaloption_on_scenario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.medical_option
    ADD CONSTRAINT fk_medicaloption_on_scenario FOREIGN KEY (scenario_id) REFERENCES public.scenario(id);


--
-- TOC entry 3210 (class 2606 OID 25835)
-- Name: medical_option fk_medicaloption_on_selected; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.medical_option
    ADD CONSTRAINT fk_medicaloption_on_selected FOREIGN KEY (selected_id) REFERENCES public.team_progress(id);


--
-- TOC entry 3211 (class 2606 OID 25840)
-- Name: medical_option fk_medicaloption_on_team_progress_medical_options; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.medical_option
    ADD CONSTRAINT fk_medicaloption_on_team_progress_medical_options FOREIGN KEY (team_progress_medical_options_id) REFERENCES public.team_progress(id);


--
-- TOC entry 3212 (class 2606 OID 25845)
-- Name: patient_scenario fk_patientscenario_on_scenario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patient_scenario
    ADD CONSTRAINT fk_patientscenario_on_scenario FOREIGN KEY (scenario_id) REFERENCES public.scenario(id);


--
-- TOC entry 3213 (class 2606 OID 25850)
-- Name: team_member fk_teammember_on_team; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.team_member
    ADD CONSTRAINT fk_teammember_on_team FOREIGN KEY (team_id) REFERENCES public.team(id);


--
-- TOC entry 3214 (class 2606 OID 25855)
-- Name: team_progress fk_teamprogress_on_chosen_scenario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.team_progress
    ADD CONSTRAINT fk_teamprogress_on_chosen_scenario FOREIGN KEY (chosen_scenario_id) REFERENCES public.scenario(id);


--
-- TOC entry 3215 (class 2606 OID 25860)
-- Name: team_progress fk_teamprogress_on_team; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.team_progress
    ADD CONSTRAINT fk_teamprogress_on_team FOREIGN KEY (team_id) REFERENCES public.team(id);


--
-- TOC entry 3363 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pg_database_owner
--

GRANT USAGE ON SCHEMA public TO medical_user;


--
-- TOC entry 3364 (class 0 OID 0)
-- Dependencies: 215
-- Name: TABLE medical_option; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.medical_option TO medical_user;


--
-- TOC entry 3365 (class 0 OID 0)
-- Dependencies: 216
-- Name: TABLE patient_scenario; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.patient_scenario TO medical_user;


--
-- TOC entry 3366 (class 0 OID 0)
-- Dependencies: 214
-- Name: SEQUENCE primary_sequence; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.primary_sequence TO medical_user;


--
-- TOC entry 3367 (class 0 OID 0)
-- Dependencies: 217
-- Name: TABLE scenario; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.scenario TO medical_user;


--
-- TOC entry 3368 (class 0 OID 0)
-- Dependencies: 218
-- Name: TABLE team; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.team TO medical_user;


--
-- TOC entry 3369 (class 0 OID 0)
-- Dependencies: 219
-- Name: TABLE team_member; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.team_member TO medical_user;


--
-- TOC entry 3370 (class 0 OID 0)
-- Dependencies: 220
-- Name: TABLE team_progress; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.team_progress TO medical_user;


--
-- TOC entry 2056 (class 826 OID 25626)
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES  TO medical_user;


--
-- TOC entry 2055 (class 826 OID 25625)
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES  TO medical_user;


-- Completed on 2024-12-13 15:07:31

--
-- PostgreSQL database dump complete
--

