package com.perna.medicalscenario.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class TeamSummary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Scenario ID is required")
    @Min(value = 1, message = "Scenario ID must be positive")
    private int scenarioId;

    @NotBlank(message = "Team name is required")
    @Size(max = 100, message = "Team name cannot exceed 100 characters")
    private String teamName;

    @ElementCollection
    @Size(min = 1, message = "At least one team member is required")
    private List<String> teamMembers;

    @NotBlank(message = "Final diagnosis is required")
    private String finalDiagnosis;

    @NotBlank(message = "Final therapy is required")
    private String finalTherapy;

    @NotNull(message = "Total cost is required")
    private BigDecimal totalCost;

    @NotNull(message = "Total doctor time is required")
    @Min(value = 0, message = "Total doctor time cannot be negative")
    private Integer totalDoctorTime;

    @NotNull(message = "Total patient time is required")
    @Min(value = 0, message = "Total patient time cannot be negative")
    private Integer totalPatientTime;

    private LocalDateTime completedDateTime;

    @PrePersist
    protected void onCreate() {
        if (this.completedDateTime == null) {
            this.completedDateTime = LocalDateTime.now();
        }
    }


    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public int getScenarioId() {
        return scenarioId;
    }

    public void setScenarioId(final int scenarioId) {
        this.scenarioId = scenarioId;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(final String teamName) {
        this.teamName = teamName;
    }

    public List<String> getTeamMembers() {
        return teamMembers;
    }

    public void setTeamMembers(final List<String> teamMembers) {
        this.teamMembers = teamMembers;
    }

    public String getFinalDiagnosis() {
        return finalDiagnosis;
    }

    public void setFinalDiagnosis(final String finalDiagnosis) {
        this.finalDiagnosis = finalDiagnosis;
    }

    public String getFinalTherapy() {
        return finalTherapy;
    }

    public void setFinalTherapy(final String finalTherapy) {
        this.finalTherapy = finalTherapy;
    }

    public BigDecimal getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(final BigDecimal totalCost) {
        this.totalCost = totalCost;
    }

    public Integer getTotalDoctorTime() {
        return totalDoctorTime;
    }

    public void setTotalDoctorTime(final Integer totalDoctorTime) {
        this.totalDoctorTime = totalDoctorTime;
    }

    public Integer getTotalPatientTime() {
        return totalPatientTime;
    }

    public void setTotalPatientTime(final Integer totalPatientTime) {
        this.totalPatientTime = totalPatientTime;
    }

    public LocalDateTime getCompletedDateTime() {
        return completedDateTime;
    }

    public void setCompletedDateTime(final LocalDateTime completedDateTime) {
        this.completedDateTime = completedDateTime;
    }
}
