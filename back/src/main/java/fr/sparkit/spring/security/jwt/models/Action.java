package fr.sparkit.spring.security.jwt.models;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "actions")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Action {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String action;

    public Action(String action) {
        this.action=action;
    }
}