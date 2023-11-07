package taiga.backend.server.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;

import taiga.backend.server.model.User;

@Mapper
public interface UserMapper {
    @Insert("INSERT INTO users (email, first_name, last_name, password, role) VALUES(#{email}, #{first_name}, #{last_name}, #{password}, #{role})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insert(User user);

    @Select("SELECT * FROM users WHERE id = #{id}")
    User findById(Integer id);

    @Select("SELECT * FROM users WHERE email = #{email}")
    User findByEmail(String email);
}
