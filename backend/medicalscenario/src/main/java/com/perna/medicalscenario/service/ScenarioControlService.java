package com.perna.medicalscenario.service;

import com.perna.medicalscenario.entity.ScenarioControl;
import com.perna.medicalscenario.exception.ResourceNotFoundException;
import com.perna.medicalscenario.repository.ScenarioControlRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScenarioControlService {

    private final ScenarioControlRepository repo;

    public ScenarioControlService(ScenarioControlRepository repo) {
        this.repo = repo;
    }

    public List<ScenarioControl> getAllControls() {
        return repo.findAll();
    }

    public ScenarioControl toggleUnlock(Long scenarioId, boolean unlocked) {
        ScenarioControl control = repo.findById(scenarioId)
                .orElseThrow(() -> new ResourceNotFoundException("ScenarioControl", "id", scenarioId));
        control.setId(scenarioId);
        control.setUnlocked(unlocked);
        return repo.save(control);
    }


    public boolean isUnlocked(Long scenarioId) {
        return repo.findById(scenarioId)
                .map(ScenarioControl::isUnlocked)
                .orElseThrow(() -> new ResourceNotFoundException("ScenarioControl", "id", scenarioId));
    }

}
