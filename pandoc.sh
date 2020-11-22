sprache=en
cv=$home/cv
cvo=$cv/output

output=anschreiben_pl
js=$cv/media/me.js


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