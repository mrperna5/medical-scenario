package com.perna.medicalscenario.config;

import com.perna.medicalscenario.entity.ScenarioControl;
import com.perna.medicalscenario.repository.ScenarioControlRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ScenarioControlInitializer {

    @Bean
    CommandLineRunner loadInitialScenarioControls(ScenarioControlRepository repo) {
        return args -> {
            for (long i = 1; i <= 12; i++) {
                if (repo.findById(i).isEmpty()) {
                    ScenarioControl control = new ScenarioControl();
                    control.setId(i);
                    control.setUnlocked(false);
                    repo.save(control);
                }
            }
        };
    }
}
