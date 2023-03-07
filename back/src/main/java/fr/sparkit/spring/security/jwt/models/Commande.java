package fr.sparkit.spring.security.jwt.models;

import lombok.*;

import javax.persistence.*;
import java.util.*;

@Entity
@Data
@NoArgsConstructor
public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "commandeId")
    private Long commandeId;

    @OneToMany(mappedBy = "commande",cascade = CascadeType.ALL)
    private List<OrderLine> orderLineList;
    private double prixTotal;


    private Date dateCommande;
    @ManyToOne
    @JoinColumn(name = "id_client", nullable = false)
    private Client client;

}
