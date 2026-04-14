<?php
/**
 * PHP Mailer for Sellers Form - Sunset Landing
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

    $nombre = strip_tags(trim($data["nombre"]));
    $fechaNacimiento = strip_tags(trim($data["fechaNacimiento"]));
    $celular = strip_tags(trim($data["celular"]));
    $correo = filter_var(trim($data["correo"]), FILTER_SANITIZE_EMAIL);
    $razon = strip_tags(trim($data["razon"]));

    if (empty($nombre) || empty($correo) || empty($celular)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Por favor completa todos los campos requeridos."]);
        exit;
    }

    // --- CONFIGURACIÓN ---
    $recipient = "ventas@sunsetbcs.com";
    $from_name = "Sunset Vendedores";
    $from_email = "ventas@sunsetbcs.com"; // Debe ser una cuenta válida del dominio

    // --- 1. Notification Email for Business ---
    $business_subject = "=?UTF-8?B?" . base64_encode("Aplicación de Vendedor: $nombre") . "?=";
    $business_body = "
        <div class='header'><h1 class='title'>Nueva Aplicación de Vendedor</h1></div>
        <div class='item'><p class='label'>Nombre completo</p><p class='value'>$nombre</p></div>
        <div class='item'><p class='label'>Fecha de Nacimiento</p><p class='value'>$fechaNacimiento</p></div>
        <div class='item'><p class='label'>Celular</p><p class='value'>$celular</p></div>
        <div class='item'><p class='label'>Correo electrónico</p><p class='value'>$correo</p></div>
        <div class='item'><p class='label'>Por qué quiere unirse</p><p class='value' style='white-space: pre-wrap;'>$razon</p></div>";

    // --- 2. Auto-responder Email for Client ---
    $client_subject = "=?UTF-8?B?" . base64_encode("Recibimos tu solicitud para el Círculo Elite") . "?=";
    $client_body = "
        <div class='header'><h1 class='title'>Gracias por tu interés</h1></div>
        <p class='value'>¡Hola $nombre!</p>
        <p class='value'>Gracias por tu interés en unirte a nuestro equipo exclusivo de ventas en Sunset.</p>
        <p class='value'>Nuestro equipo de coordinación de ventas revisará tu información y nos pondremos en contacto contigo pronto para los siguientes pasos.</p>
        <div style='margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(139, 92, 246, 0.1);'>
            <p class='label'>Resumen de tu razón de ingreso:</p>
            <p class='value' style='font-size: 14px; opacity: 0.6; font-style: italic; line-height: 1.6;'>\"$razon\"</p>
        </div>";

    function wrapEmail($body)
    {
        return "
        <html>
        <head>
            <style>
                body { font-family: 'Montserrat', sans-serif; color: #2C1A0E; line-height: 1.8; background-color: #FAF5F0; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 40px auto; padding: 40px; background: #FAF5F0; border: 1px solid rgba(139, 92, 246, 0.1); }
                .header { border-bottom: 1px solid rgba(139, 92, 246, 0.1); padding-bottom: 20px; margin-bottom: 30px; }
                .title { font-family: 'Literata', serif; font-size: 24px; font-weight: 300; font-style: italic; color: #2C1A0E; margin: 0; }
                .label { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #8B5CF6; margin-bottom: 5px; }
                .value { font-size: 16px; font-weight: 300; color: #2C1A0E; margin-bottom: 20px; }
                .footer { margin-top: 40px; font-size: 11px; letter-spacing: 1px; color: rgba(44, 26, 14, 0.3); text-align: center; border-top: 1px solid rgba(139, 92, 246, 0.05); padding-top: 20px; }
            </style>
        </head>
        <body>
            <div class='container'>$body<div class='footer'>Sunset BCS • División de Ventas</div></div>
        </body>
        </html>";
    }

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $from_name <$from_email>" . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    $business_headers = $headers . "\r\n" . "Reply-To: $nombre <$correo>" . "\r\n";
    $client_headers = $headers . "\r\n" . "Reply-To: Sunset Ventas <ventas@sunsetbcs.com>" . "\r\n";

    // Ejecución
    $mail_to_business = mail($recipient, $business_subject, wrapEmail($business_body), $business_headers);
    $mail_to_client = mail($correo, $client_subject, wrapEmail($client_body), $client_headers);

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
