<?php
require "connection.php"; // Ensure this file contains your database connection

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    // Validate input (basic validation)
    if (empty($name) || empty($email) || empty($password)) {
        die("Please fill in all fields.");
    }

    // Hash the password for security
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    
    // Insert user into the database
    try {
        $sql = "INSERT INTO mahmoud (name, email, password) VALUES (:name, :email, :password)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':name' => $name,
            ':email' => $email,
            ':password' => $hashed_password,
        ]);
        $_SESSION['loggedin']=true;
        echo "Registration successful! <a href='login.html'>Login here</a>";
    } catch (PDOException $e) {
        if ($e->getCode() == 23000) { // Duplicate email error
            echo "This email is already registered.";
        } else {
            echo "An error occurred: " . $e->getMessage();
        }
    }
}
header ("Location:mh.php");
?>
