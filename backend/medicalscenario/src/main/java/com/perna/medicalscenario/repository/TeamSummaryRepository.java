package com.perna.medicalscenario.repository;

import com.perna.medicalscenario.entity.TeamSummary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamSummaryRepository extends JpaRepository<TeamSummary, Long> {
}
