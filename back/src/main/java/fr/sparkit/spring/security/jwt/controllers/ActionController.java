package fr.sparkit.spring.security.jwt.controllers;

import fr.sparkit.spring.security.jwt.models.*;
import fr.sparkit.spring.security.jwt.services.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
public class ActionController {

    @Autowired
    private IActionService actionService;

    @GetMapping("/getAllActions")
    public List<Action> getAllActions() {
        return actionService.getAllActions();
    }
}
