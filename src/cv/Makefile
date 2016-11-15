PDFLATEX=pdflatex
BIBTEX=bibtex

all : cv.html

cv.html : cv.tex cv.pdf
	pandoc -o cv.html cv.tex
cv.pdf : cv.tex 
	$(PDFLATEX) cv.tex
