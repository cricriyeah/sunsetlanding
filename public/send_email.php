<?php
/**
 * PHP Mailer Bridge for Sunset Landing
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!$data) {
        $data = $_POST;
    }

    $name = strip_tags(trim($data["name"]));
    $email = filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($data["phone"]));
    $project = strip_tags(trim($data["project"]));
    $message = strip_tags(trim($data["message"]));

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Por favor completa todos los campos requeridos."]);
        exit;
    }

    // Definición del destinatario de la empresa
    $recipient = "contacto@sunsetbcs.com";

    // --- 1. Notification Email for Business ---
    $business_subject = "=?UTF-8?B?" . base64_encode("Nuevo Lead: $name - $project") . "?=";
    $business_body = "
        <div class='header'><h1 class='title'>Nuevo Mensaje</h1></div>
        <div class='item'><p class='label'>Nombre completo</p><p class='value'>$name</p></div>
        <div class='item'><p class='label'>Correo electrónico</p><p class='value'>$email</p></div>
        <div class='item'><p class='label'>Teléfono de contacto</p><p class='value'>$phone</p></div>
        <div class='item'><p class='label'>Proyecto de interés</p><p class='value'>$project</p></div>
        <div class='item'><p class='label'>Mensaje</p><p class='value' style='white-space: pre-wrap;'>$message</p></div>";

    // --- 2. Auto-responder Email for Client ---
    $client_subject = "=?UTF-8?B?" . base64_encode("Gracias por tu interés en Sunset") . "?=";
    $client_body = "
        <div class='header'><h1 class='title'>Es un placer saludarte</h1></div>
        <p class='value'>¡Hola $name!</p>
        <p class='value'>Qué gusto saludarte. Hemos recibido tu mensaje y queremos agradecerte por compartir tu interés en <strong>$project</strong> con nosotros.</p>
        <p class='value'>Nuestro equipo ya está revisando tu solicitud y nos pondremos en contacto contigo pronto.</p>
        <div style='margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(44, 26, 14, 0.05);'>
            <p class='label'>Copia de lo que nos compartiste:</p>
            <p class='value' style='font-size: 14px; opacity: 0.6; font-style: italic; line-height: 1.6;'>\"$message\"</p>
        </div>";

    function wrapEmail($body)
    {
        return "
        <html>
        <head>
            <style>
                body { font-family: 'Montserrat', sans-serif; color: #2C1A0E; line-height: 1.8; background-color: #FAF5F0; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 40px auto; padding: 40px; background: #FAF5F0; border: 1px solid rgba(44, 26, 14, 0.1); }
                .header { border-bottom: 1px solid rgba(44, 26, 14, 0.1); padding-bottom: 20px; margin-bottom: 30px; }
                .title { font-family: 'Literata', serif; font-size: 24px; font-weight: 300; font-style: italic; color: #2C1A0E; margin: 0; }
                .label { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: rgba(44, 26, 14, 0.5); margin-bottom: 5px; }
                .value { font-size: 16px; font-weight: 300; color: #2C1A0E; margin-bottom: 20px; }
                .footer { margin-top: 40px; font-size: 11px; letter-spacing: 1px; color: rgba(44, 26, 14, 0.3); text-align: center; border-top: 1px solid rgba(44, 26, 14, 0.05); padding-top: 20px; }
            </style>
        </head>
        <body>
            <div class='container'>$body<div class='footer'>Sunset BCS • Enviado desde el sitio oficial</div></div>
        </body>
        </html>";
    }

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Sunset Desarrolladora <contacto@sunsetbcs.com>" . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    $business_headers = $headers . "\r\n" . "Reply-To: $name <$email>" . "\r\n";
    $client_headers = $headers . "\r\n" . "Reply-To: Sunset <contacto@sunsetbcs.com>" . "\r\n";

    // Ejecución
    $mail_to_business = mail($recipient, $business_subject, wrapEmail($business_body), $business_headers);
    $mail_to_client = mail($email, $client_subject, wrapEmail($client_body), $client_headers);

    if ($mail_to_business) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Enviado correctamente."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Error al procesar el envío."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "No autorizado."]);
}
?>