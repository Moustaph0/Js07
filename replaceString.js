
const p = "ceci est une phrase";

function replaceString (chaine, motExist, motRemplac)
{
    console.log(chaine.replace(motExist, motRemplac));
}

replaceString(p, 'est', 'etait');

