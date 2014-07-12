PDFLATEX=pdflatex
BIBTEX=bibtex

all : publications.html

publications.html : publications.tex publications.pdf
	pandoc -o publications.html publications.tex
publications.pdf : publications.tex 
	$(PDFLATEX) publications.tex


clean : 
	rm -f *.aux *.dvi *.ps *.log  
