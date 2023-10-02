#/bin/bash
clear
# set variables Git
    git config --global core.autocrlf false

# set variables Shell
    comment="${1}"
    rama="${2}"

#Ayuda de Shell tagCreate
if [[ -z "$comment" || -z "$rama" ]]; # Si no se envia carpeta de repositorio de la aplicacion
    then
        echo  '-------------------------------------------------------------------------'
        echo  ' >>> Falta variable 1. commentario o nombre de la 2. rama >>>>           '
        echo  '-------------------------------------------------------------------------'
        exit 1
    else

        # Ejecucion
        echo "----------------------------------------------------"
        git status

        echo "----------------------------------------------------"
        read -p "Press [Enter] key to continue..." readEnterKey

        echo "----------------------------------------------------"
        echo "git add ."
        git add .
        
        echo "----------------------------------------------------"
        read -p "Press [Enter] key to continue..." readEnterKey

        echo "----------------------------------------------------"
        echo "git commit -m \"$comment\""
        git commit -m "$comment"

        echo "----------------------------------------------------"
        read -p "Press [Enter] key to continue..." readEnterKey

        echo "----------------------------------------------------"
        echo "git push origin $rama"
        git push origin $rama

        echo "----------------------------------------------------"
        read -p "Press [Enter] key to continue..." readEnterKey

fi