package fr.sparkit.spring.security.jwt.models;

import lombok.*;

import javax.persistence.*;

@Entity
@Table
@Data
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_client")
    private Long clientId;

    private String nomClient;
}
