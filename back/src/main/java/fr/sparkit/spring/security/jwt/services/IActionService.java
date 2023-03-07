package fr.sparkit.spring.security.jwt.services;

import fr.sparkit.spring.security.jwt.models.*;
import org.springframework.stereotype.*;

import java.util.*;

public interface IActionService {

    List<Action> getAllActions();

    List<Action> getActionsByUser(String email);
}
