package fr.sparkit.spring.security.jwt.repository;

import fr.sparkit.spring.security.jwt.models.*;
import org.springframework.data.jpa.repository.*;

import java.util.*;

public interface ActionRepository extends JpaRepository<Action,Long> {

}
