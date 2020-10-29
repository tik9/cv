sprache=en
cv=$home/cv
cvo=$cv/output

output=anschreiben_pl
js=$cv/media/js.js

function se_ag {
	sed -i "/ags=\[/a {j:'$1',\na:'$2'}," $cv/media/ags.js
}

function se_bew { # firma sprache
	# rm $output
	sed -i 's/^output=anschreiben_.*$/output=anschreiben_'$1'/' $0 
	sed -i "s/^sprache=.*$/sprache=$2/" $0
	# sed -i "s/^sprache=.*$/sprache=$2/" $js

	cp $cv/anschreiben_$2.md $cv/anschreiben_$1.md
	code $cv/anschreiben_$1.md
}

function pandoc {

	#output=cv_en
	
	#output=`ls -t $cv | head -1`
	#output=${output%.md}
	
	echo $output
	output_md=$cv/$output.md
	html_out=$cvo/$output.html
	pandoc $output_md -o $html_out -s
	
	# wkhtmltopdf $html_out $home/$output.pdf

	# ch $html_out
	# qp $home/$output.pdf
}