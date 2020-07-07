out_vz=output
in_vz=input
#output='output/cv.html'
#output='output/anschreiben.html'
#input='input/cv.md'
#input='input/anschreiben.md'

#pandoc --standalone --include-in-header style.css -H js.js --output $output --metadata pagetitle='TK' $input

html:
	for f in $(in_vz)/*.md; do \
		FILE_NAME=`basename $$f | sed 's/.md//g'`; \
		echo $$FILE_NAME.html; \
		#echo $$f \
		pandoc --standalone --include-in-header style.css \
		  -H js.js \
			--output $(out_vz)/$$FILE_NAME.html $$f \
			--metadata pagetitle=$$FILE_NAME;\
	done

clean:
	rm -f $(out_vz)/*
