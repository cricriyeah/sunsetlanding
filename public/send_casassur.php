<?php
/**
 * PHP Mailer Bridge for Casas Sur Quotation
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
    $celular = strip_tags(trim($data["celular"]));
    $modelo = strip_tags(trim($data["modelo"]));
    $amenidades = isset($data["amenidades"]) ? strip_tags(trim($data["amenidades"])) : "No especificadas";
    $financiamiento = strip_tags(trim($data["financiamiento"]));
    $anticipo = isset($data["anticipo"]) ? strip_tags(trim($data["anticipo"])) : "N/A";
    $informacionAdicional = isset($data["informacionAdicional"]) ? strip_tags(trim($data["informacionAdicional"])) : "Ninguna";
    $codigoVendedor = isset($data["codigoVendedor"]) ? strip_tags(trim($data["codigoVendedor"])) : "N/A";

    if (empty($nombre) || empty($celular) || empty($modelo) || empty($financiamiento)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Por favor completa todos los campos requeridos."]);
        exit;
    }

    $recipient = "contacto@sunsetbcs.com";
    $from_name = "Sunset Casas Sur";
    $from_email = "contacto@sunsetbcs.com";

    // --- 1. Notification Email for Business ---
    $business_subject = "=?UTF-8?B?" . base64_encode("Cotización Casas Sur: $nombre") . "?=";
    $business_body = "
        <div class='header'><h1 class='title'>Lead Casas Sur</h1></div>
        <div class='item'><p class='label'>Nombre completo</p><p class='value'>$nombre</p></div>
        <div class='item'><p class='label'>Celular</p><p class='value'>$celular</p></div>
        <div class='item'><p class='label'>Modelo de interés</p><p class='value'>$modelo</p></div>
        <div class='item'><p class='label'>Amenidades seleccionadas</p><p class='value'>$amenidades</p></div>
        <div class='item'><p class='label'>¿Necesita financiamiento?</p><p class='value'>$financiamiento</p></div>";
        
    if ($financiamiento === "Sí") {
        $business_body .= "
        <div class='item'><p class='label'>Anticipo disponible</p><p class='value'>$anticipo</p></div>";
    }

    $business_body .= "
        <div class='item'><p class='label'>Información Adicional</p><p class='value'>$informacionAdicional</p></div>
        <div class='item'><p class='label'>Código de Vendedor</p><p class='value'>$codigoVendedor</p></div>";

    function wrapEmail($body)
    {
        return "
        <html>
        <head>
            <style>
                body { font-family: 'Montserrat', sans-serif; color: #2C1A0E; line-height: 1.8; background-color: #FAF5F0; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 40px auto; padding: 40px; background: #FAF5F0; border: 1px solid rgba(30, 58, 138, 0.1); }
                .header { border-bottom: 1px solid rgba(30, 58, 138, 0.1); padding-bottom: 20px; margin-bottom: 30px; }
                .title { font-family: 'Literata', serif; font-size: 24px; font-weight: 300; font-style: italic; color: #2C1A0E; margin: 0; }
                .label { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #1e3a8a; margin-bottom: 5px; }
                .value { font-size: 16px; font-weight: 300; color: #2C1A0E; margin-bottom: 20px; }
                .footer { margin-top: 40px; font-size: 11px; letter-spacing: 1px; color: rgba(44, 26, 14, 0.3); text-align: center; border-top: 1px solid rgba(30, 58, 138, 0.05); padding-top: 20px; }
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

    $business_headers = $headers . "\r\n" . "Reply-To: Sunset <contacto@sunsetbcs.com>" . "\r\n";

    // Ejecución (solo se manda a negocio, no hay email del cliente para mandarle auto-respuesta)
    $mail_to_business = mail($recipient, $business_subject, wrapEmail($business_body), $business_headers);

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
