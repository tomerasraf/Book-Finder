git add --all .

echo "###########################"
echo "Write your commit comment!"
echo "###########################"

read input

curtime=$(date +"%T %d-%m-%Y")
git commit -m "Comment : $input on $curtime"

git push -u origin master