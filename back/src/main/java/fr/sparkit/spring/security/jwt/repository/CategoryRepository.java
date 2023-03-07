package fr.sparkit.spring.security.jwt.repository;

import fr.sparkit.spring.security.jwt.models.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long> {
    Boolean existsByTitre(String titre);
}
