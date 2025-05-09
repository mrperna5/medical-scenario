package com.perna.medicalscenario.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;

@Entity
public class ScenarioControl {

    @Id
    @NotNull(message = "Scenario ID is required")
    private Long id;

    @Column(nullable = false)
    private boolean unlocked;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public boolean isUnlocked() {
        return unlocked;
    }

    public void setUnlocked(final boolean unlocked) {
        this.unlocked = unlocked;
    }
}
