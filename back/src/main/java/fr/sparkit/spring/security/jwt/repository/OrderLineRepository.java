package fr.sparkit.spring.security.jwt.repository;

import fr.sparkit.spring.security.jwt.models.*;
import org.springframework.data.jpa.repository.*;

public interface OrderLineRepository extends JpaRepository<OrderLine,Long> {
}
