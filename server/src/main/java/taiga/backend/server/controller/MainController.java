package taiga.backend.server.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import taiga.backend.server.mapper.UserMapper;
import taiga.backend.server.model.Token;
import taiga.backend.server.model.User;
import taiga.backend.server.service.AuthenticationService;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class MainController {

    private final AuthenticationService authenticationService;
    private final UserMapper userMapper;

    @PostMapping("/authenticate")
    public ResponseEntity<Token> authenticate(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @GetMapping("/{id}")
    public User findById(@PathVariable("id") Integer id) {
        User user = userMapper.findById(id);
        return user;
    }

}
