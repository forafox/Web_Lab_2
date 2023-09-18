plugins {
    id("java")
    id("war")
}

group = "org.akarabanov"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    compileOnly("jakarta.servlet:jakarta.servlet-api:6.0.0")
    compileOnly("jakarta.servlet.jsp:jakarta.servlet.jsp-api:3.1.1")
}

java {
    targetCompatibility = JavaVersion.VERSION_17
    sourceCompatibility = JavaVersion.VERSION_17
}

war {

}

tasks.getByName<Test>("test") {
    useJUnitPlatform()
}