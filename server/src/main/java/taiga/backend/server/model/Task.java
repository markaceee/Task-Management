package taiga.backend.server.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Task {

    private Integer id;
    private String taskName;
    private Integer assignTo;
    private Status status;
    private User user;
}
