package com.perna.medicalscenario.service;

import com.perna.medicalscenario.entity.TeamSummary;
import com.perna.medicalscenario.exception.ResourceNotFoundException;
import com.perna.medicalscenario.repository.TeamSummaryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamSummaryService {

    private final TeamSummaryRepository repository;

    public TeamSummaryService(TeamSummaryRepository repository) {
        this.repository = repository;
    }

    public TeamSummary save(TeamSummary summary) {
        return repository.save(summary);
    }

    public List<TeamSummary> getAll() {
        return repository.findAll();
    }

    public void deleteByIds(List<Long> ids) {
        repository.deleteAllById(ids);
    }

    public TeamSummary getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("TeamSummary", "id", id));
    }
}
