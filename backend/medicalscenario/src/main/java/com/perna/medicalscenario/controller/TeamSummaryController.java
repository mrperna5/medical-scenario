package com.perna.medicalscenario.controller;

import com.perna.medicalscenario.entity.TeamSummary;
import com.perna.medicalscenario.service.TeamSummaryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/summary")
@CrossOrigin
@Tag(name = "Team Summary", description = "Team Summary management APIs")
public class TeamSummaryController {

    private final TeamSummaryService service;

    public TeamSummaryController(TeamSummaryService service) {
        this.service = service;
    }

    @Operation(summary = "Create a new team summary", description = "Creates a new team summary with the provided information")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully created the team summary",
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = TeamSummary.class))),
            @ApiResponse(responseCode = "400", description = "Invalid input data", content = @Content)
    })
    @PostMapping
    public ResponseEntity<TeamSummary> save(
            @Parameter(description = "Team summary object to be created", required = true)
            @Valid @RequestBody TeamSummary summary) {
        return ResponseEntity.ok(service.save(summary));
    }

    @Operation(summary = "Get all team summaries", description = "Returns a list of all team summaries")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved the list of team summaries",
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = TeamSummary.class)))
    })
    @GetMapping
    public ResponseEntity<List<TeamSummary>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }

    @Operation(summary = "Delete team summaries by IDs", description = "Deletes team summaries with the specified IDs")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Successfully deleted the team summaries", content = @Content)
    })
    @DeleteMapping
    public ResponseEntity<Void> deleteByIds(
            @Parameter(description = "List of team summary IDs to delete", required = true)
            @RequestBody List<Long> ids) {
        service.deleteByIds(ids);
        return ResponseEntity.noContent().build();
    }
}
