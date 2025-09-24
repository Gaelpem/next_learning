// On importe le module "fs" de Node.js (en version "promises") 
// → il permet de lire et écrire dans des fichiers de manière asynchrone.
import fs from 'node:fs/promises'

// On crée une fonction asynchrone qui va enregistrer un feedback (un message de l'utilisateur).
export async function storeFeedback(text){
    
    // On lit le contenu du fichier "user-feedback.json"
    // await → attend que la lecture soit terminée avant de continuer
    const storedFeedback = await fs.readFile('data/user-feedback.json')

    // Le contenu lu est une chaîne de caractères (texte JSON).
    // On le convertit en tableau d'objets JavaScript avec JSON.parse
    const feedback = JSON.parse(storedFeedback)

    // On ajoute (push) un nouvel objet dans le tableau :
    // - id = un nombre unique (l'heure exacte en millisecondes, grâce à new Date().getTime())
    // - text = le message envoyé par l'utilisateur depuis le formulaire
    feedback.push({ id: new Date().getTime(), text })

    // On transforme le tableau "feedback" en texte JSON (JSON.stringify)
    // puis on réécrit le fichier "user-feedback.json" avec ce nouveau contenu.
    await fs.writeFile('data/user-feedback.json', JSON.stringify(feedback))
}
