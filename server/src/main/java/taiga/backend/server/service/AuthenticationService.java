package taiga.backend.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import taiga.backend.server.config.JwtService;
import taiga.backend.server.controller.LoginRequest;
import taiga.backend.server.controller.RegisterRequest;
import taiga.backend.server.model.Role;
import taiga.backend.server.model.Token;
import taiga.backend.server.model.User;
import taiga.backend.server.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    @Autowired
    UserRepository repository;

    private final AuthenticationManager authenticationManager;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    public Token authenticate(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()));

        var user = repository.findByEmail(request.getEmail()).orElseThrow();

        var jwtToken = jwtService.generateToken(user);

        return Token
                .builder()
                .token(jwtToken)
                .build();
    }

    public String register(RegisterRequest request) {
        var user = User
                .builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();

        repository.save(user);

        return "Registered";
    }
}
