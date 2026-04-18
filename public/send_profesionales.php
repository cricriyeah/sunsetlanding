<?php
/**
 * PHP Mailer for Professionals Form with Attachments - Sunset Landing
 */

error_reporting(0);
ini_set('display_errors', 0);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = isset($_POST["nombre"]) ? strip_tags(trim($_POST["nombre"])) : "";
    $celular = isset($_POST["celular"]) ? strip_tags(trim($_POST["celular"])) : "";
    $profesion = isset($_POST["profesion"]) ? strip_tags(trim($_POST["profesion"])) : "";
    $rfc = isset($_POST["rfc"]) ? strip_tags(trim($_POST["rfc"])) : "No especificado";

    // Handle large file uploads and basic validation
    if (empty($nombre) || empty($celular) || empty($profesion)) {
         http_response_code(400);
         echo json_encode(["status" => "error", "message" => "Faltan campos requeridos."]);
         exit;
    }

    $recipient = "empleos@sunsetbcs.com";
    $from_name = "Sunset Profesionales";
    $from_email = "empleos@sunsetbcs.com";

    $subject = "=?UTF-8?B?" . base64_encode("Aplicación Profesional: $nombre") . "?=";
    
    // HTML Body inside the multipart
    $html_body = "
        <html>
        <head>
            <style>
                body { font-family: 'Montserrat', sans-serif; color: #2C1A0E; line-height: 1.8; background-color: #FAF5F0; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 40px auto; padding: 40px; background: #FAF5F0; border: 1px solid rgba(234, 88, 12, 0.1); }
                .header { border-bottom: 1px solid rgba(234, 88, 12, 0.1); padding-bottom: 20px; margin-bottom: 30px; }
                .title { font-family: 'Literata', serif; font-size: 24px; font-weight: 300; font-style: italic; color: #2C1A0E; margin: 0; }
                .label { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #ea580c; margin-bottom: 5px; }
                .value { font-size: 16px; font-weight: 300; color: #2C1A0E; margin-bottom: 20px; }
                .footer { margin-top: 40px; font-size: 11px; letter-spacing: 1px; color: rgba(44, 26, 14, 0.3); text-align: center; border-top: 1px solid rgba(234, 88, 12, 0.05); padding-top: 20px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'><h1 class='title'>Nueva Aplicación de Profesional</h1></div>
                <div class='item'><p class='label'>Nombre completo</p><p class='value'>$nombre</p></div>
                <div class='item'><p class='label'>Celular</p><p class='value'>$celular</p></div>
                <div class='item'><p class='label'>Profesión / Oficio</p><p class='value'>$profesion</p></div>
                <div class='item'><p class='label'>¿Cuenta con RFC?</p><p class='value'>$rfc</p></div>
                <div class='footer'>Sunset BCS • División de Recursos Humanos</div>
            </div>
        </body>
        </html>";

    $boundary = md5(time());

    $headers = "From: $from_name <$from_email>\r\n";
    $headers .= "Reply-To: $from_email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Message Body Construction
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= $html_body . "\r\n";

    // Attachments Handling
    $files_keys = ["ineFrente", "ineReverso"];
    foreach ($files_keys as $file_key) {
        if (isset($_FILES[$file_key]) && $_FILES[$file_key]['error'] == UPLOAD_ERR_OK) {
            $file_tmp = $_FILES[$file_key]['tmp_name'];
            $file_name = $_FILES[$file_key]['name'];
            $file_type = $_FILES[$file_key]['type'];
            
            $file_content = @file_get_contents($file_tmp);
            if ($file_content !== false) {
                $file_encoded = chunk_split(base64_encode($file_content));

                $body .= "--$boundary\r\n";
                $body .= "Content-Type: $file_type; name=\"$file_name\"\r\n";
                $body .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n";
                $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
                $body .= $file_encoded . "\r\n";
            }
        }
    }
    $body .= "--$boundary--";

    // Execution
    $mail_sent = mail($recipient, $subject, $body, $headers);

    if ($mail_sent) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Solicitud enviada correctamente."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "No se pudo procesar el envío del correo."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Acceso no autorizado."]);
}
exit;
?>
