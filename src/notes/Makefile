PDFLATEX=pdflatex
BIBTEX=bibtex

all : notes.html

notes.pdf : notes.tex  
	$(PDFLATEX) notes.tex
notes.html : notes.tex notes.pdf
	pandoc -o notes.html notes.tex

clean : 
	rm -f *.aux *.dvi *.ps *.log  
