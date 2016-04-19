PDFLATEX=pdflatex
BIBTEX=bibtex

all : talks.html

talks.html : talks.pdf talks.tex
	pandoc -o talks.html talks.tex
talks.pdf : talks.tex 
	$(PDFLATEX) talks.tex


clean : 
	rm -f *.aux *.dvi *.ps *.log  
