package fr.sparkit.spring.security.jwt.advice;

import fr.sparkit.spring.security.jwt.models.*;
import fr.sparkit.spring.security.jwt.repository.*;
import org.aspectj.lang.*;
import org.aspectj.lang.annotation.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.security.core.*;
import org.springframework.security.core.context.*;
import org.springframework.stereotype.*;

import java.text.*;
import java.util.*;

@Aspect
@Component
public class LoggingAspect {

    @Autowired
    private ActionRepository actionRepository; // define a repository to save the action details

    @Before("execution(* fr.sparkit.spring.security.jwt.services.*.add*(..))")
    // define the pointcut expression to intercept
    public void logBefore(JoinPoint joinPoint) {
        String methodName = joinPoint.getSignature().getName();
        String className = joinPoint.getTarget().getClass().getSimpleName();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        SimpleDateFormat s = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        Date date = new Date();
        String actionDate = s.format(date);
        String action = username + " a ajouté " + methodName.substring(3) + " le " + actionDate;
        Action newAction = new Action(action);
        actionRepository.save(newAction);
    }
}