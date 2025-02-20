<?php
    session_start();
    use PHPMailer\PHPMailer\PHPMailer;

    require_once realpath(__DIR__ . "/vendor/autoload.php");
    use Dotenv\Dotenv;
    $dotenv = Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    $servername = $_ENV['MySQL_DB_HOST'];
    $username = $_ENV['MySQL_DB_USER_NAME'];
    $password = $_ENV['MySQL_DB_PASSWORD'];
    $dbname = $_ENV['MySQL_DB_NAME'];

    $email = $_POST['email'];
    $title = $_POST['subject'];
    $body = $_POST['body'];

    try {   
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo "Connected successfully";
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }

    if(isset($_POST['telNo'],
             $_POST['email'],)){
        $telNo = filter_input(INPUT_POST, "telNo", FILTER_SANITIZE_NUMBER_INT);
        $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
        $fname = htmlspecialchars($_POST['fname']);
        $lname = htmlspecialchars($_POST['lname']);
        $title = htmlspecialchars($_POST['subject']);
        $body = htmlspecialchars($_POST['body']);
        echo "First Name: " . $fname . "\n" .
                "Last Name: " . $lname . "\n" .
                "Telephone Number: " . $telNo . "\n" .
                "Email: " . $email . "\n" .
                "Subject: " . $title . "\n" .
                "Message: " . $body . "\n";
    }

    $mail = new PHPMailer();

    $mail->isSMTP();
    $mail->Host = $_ENV['SMTP_HOST'];
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['SMTP_USERNAME'];
    $mail->Password = $_ENV['SMTP_PASSWORD'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $_ENV['SMTP_PORT'];

    $mail->setFrom($email, 'you');
    $mail->addAddress('jozef.jenkins25@gmail.com', 'Me');
    $mail->Subject = $title;
    $mail->Body = $body;

    if(!$mail->send()){
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        
        $Successful = TRUE;

        $sql = "INSERT INTO contact (Form_FirstName, Form_LastName, Form_Number, Form_Email, Form_Subject, Form_Message)
            VALUES (:fname, :lname, :telNo, :email, :title, :body);";
    
        try{
            $exe = $conn->prepare($sql);
            $exe->bindParam(':fname', $fname);
            $exe->bindParam(':lname', $lname);
            $exe->bindParam(':telNo', $telNo);
            $exe->bindParam(':email', $email);
            $exe->bindParam(':title', $title);
            $exe->bindParam(':body', $body);
            $exe->execute();

            header('Location: ' . 'index.php#contact');
            $_SESSION['success_message'] = 'Form submitted successfully!';
            exit();
        }
        catch(Exception $e){
            echo "Error: " . $e->getMessage();
        }
    }

?>