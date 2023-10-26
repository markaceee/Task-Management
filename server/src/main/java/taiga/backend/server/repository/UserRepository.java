package taiga.backend.server.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import taiga.backend.server.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    public Optional<User> findByEmail(String email);
}
