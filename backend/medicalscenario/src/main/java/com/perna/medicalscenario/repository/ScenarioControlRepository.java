package com.perna.medicalscenario.repository;

import com.perna.medicalscenario.entity.ScenarioControl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScenarioControlRepository extends JpaRepository<ScenarioControl, Long> {
}
