PDFLATEX=pdflatex
BIBTEX=bibtex

all : publications.pdf


publications.pdf : publications.tex 
	$(PDFLATEX) publications.tex


clean : 
	rm -f *.aux *.dvi *.ps *.log  
