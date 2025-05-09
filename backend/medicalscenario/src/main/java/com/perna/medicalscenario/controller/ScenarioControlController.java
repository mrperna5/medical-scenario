package com.perna.medicalscenario.controller;

import com.perna.medicalscenario.entity.ScenarioControl;
import com.perna.medicalscenario.service.ScenarioControlService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/control")
@Tag(name = "Scenario Control", description = "Scenario Control management APIs")
public class ScenarioControlController {

    private final ScenarioControlService service;

    public ScenarioControlController(ScenarioControlService service) {
        this.service = service;
    }

    @Operation(summary = "Get all scenario controls", description = "Returns a list of all scenario controls")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved the list of scenario controls",
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = ScenarioControl.class)))
    })
    @GetMapping
    public ResponseEntity<List<ScenarioControl>> getAll() {
        return ResponseEntity.ok(service.getAllControls());
    }

    @Operation(summary = "Update scenario unlock status", description = "Updates the unlock status of a scenario with the specified ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully updated the scenario unlock status",
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = ScenarioControl.class))),
            @ApiResponse(responseCode = "404", description = "Scenario not found with the specified ID", content = @Content)
    })
    @PostMapping("/{id}")
    public ResponseEntity<ScenarioControl> update(
            @Parameter(description = "ID of the scenario to update", required = true) @PathVariable Long id,
            @Parameter(description = "New unlock status", required = true) @RequestParam boolean unlocked) {
        return ResponseEntity.ok(service.toggleUnlock(id, unlocked));
    }

    @Operation(summary = "Check if scenario is unlocked", description = "Checks if a scenario with the specified ID is unlocked")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved the unlock status",
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = Boolean.class))),
            @ApiResponse(responseCode = "404", description = "Scenario not found with the specified ID", content = @Content)
    })
    @GetMapping("/{id}")
    public ResponseEntity<Boolean> isUnlocked(
            @Parameter(description = "ID of the scenario to check", required = true) @PathVariable Long id) {
        return ResponseEntity.ok(service.isUnlocked(id));
    }
}
