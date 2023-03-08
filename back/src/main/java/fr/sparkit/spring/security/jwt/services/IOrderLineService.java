package fr.sparkit.spring.security.jwt.services;

import fr.sparkit.spring.security.jwt.models.*;

public interface IOrderLineService {
    Boolean checkQuantity(OrderLine orderLine);

    void  changeProductQuantity(OrderLine orderLine);
}
