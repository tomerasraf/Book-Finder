if !location="$(type -p "git")" || [ -z "git" ]; then

	echo "#####################################"
	echo "installing git fir this script to work"
	echo "#####################################"
	
	sudo apt install git -y
	
	fi
	
	git init
	
	git config --global user.name "TomerAsraf"
	git config --global user.email "tomerasraf2@gmail.com"
	
	sudo git config --system core.editor nano
	
	git config --global credentail.helper cache
	
	git config --global credentail.helper 'cache --timeout=3600'
	git config --global push.default simple
	
	echo " ALL D O N E !"