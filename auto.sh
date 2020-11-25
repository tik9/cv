sprache=en
cv=~/cv

function bew { # firma sprache
    #    rm $output
		job="$2"
		fa="$1"
		fa=open
		fa_kurz=${fa:0:2}

        # if [ -n $3 ]; then; sed -i "s/^sprache=.*$/sprache=$3/" . ; fi

        cp $cv/motivation_en.md $cv/motivation_$fa_kurz.md
        code $cv/motivation_$fa_kurz.md
 }

function cp_ag {
	sed -i "/ags=\[/a {j:'$1',\na:'$2'}," $cv/media/ags.js
}
 
function pand {
	dir=~/bewerbung
	cvo=$cv/output
    #    output=cv_en
	cven=~/cv_eng_resumeio.pdf
	# cven=$cvo/cv_en.pdf

	mot=motivation.pdf
    app=app.pdf
    #    output=${output%.md}
       output=`ls -t $cv | head -1`
	   neu=${output:0:-3}
	   md=$cv/$output
	   html=$cv/$neu.html
	#    pandoc.exe $md -o $html -s
	#    /snap/bin/chromium $html
	#output=$cv/cv_de

	# wkhtmltopdf $html ~/$mot 
	pdfunite $(ls $dir/*) ~/$app
	# qp ~/$app
	   echo output,dirs,odir $output, $(ls $dir/*),$app
}

"$@"