<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone']; // Ajout du numéro de téléphone
    $message = $_POST['message'];
    
    // Construction du corps du message
    $contenu = "Nom: $nom\n";
    $contenu .= "Email: $email\n";
    $contenu .= "Téléphone: $telephone\n"; // Ajout du numéro de téléphone
    $contenu .= "Message:\n$message\n";
    
    // Envoi de l'email
    $destinataire = "exaumatoko@gmail.com"; // Remplacez ceci par votre adresse email
    $sujet = "Nouveau message depuis le formulaire de contact";
    $headers = "From: $email\r\nReply-To: $email\r\n";
    
    // Envoi de l'email
    if (mail($destinataire, $sujet, $contenu, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi de votre message.";
    }
}
?>


