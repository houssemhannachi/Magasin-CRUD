package fr.sparkit.spring.security.jwt.services;

import fr.sparkit.spring.security.jwt.models.*;
import fr.sparkit.spring.security.jwt.repository.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import java.util.*;
@Service
public class ActionServiceImpl implements IActionService{
    @Autowired
    private ActionRepository actionRepository;

    @Override
    public List<Action> getAllActions() {
        return actionRepository.findAll();
    }

    @Override
    public List<Action> getActionsByUser(String email) {
        return null;
    }
}
