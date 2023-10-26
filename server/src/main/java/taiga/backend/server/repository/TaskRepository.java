package taiga.backend.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import taiga.backend.server.model.Task;

public interface TaskRepository extends JpaRepository<Task, Integer> {

}
