from PyQt5.QtGui import QFont
from PyQt5.QtWidgets import QApplication, QWidget, QTextEdit, QVBoxLayout, QPushButton, QLineEdit
from PyQt5 import QtGui
import sys


class TextEditDemo(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)

        self.setWindowTitle("QTextEdit")
        self.setFixedSize(480, 600)
        self.setWindowIcon(QtGui.QIcon("C:\\Users\\OM\\Desktop\\Tutorials\\_36\\MyAppIcon.ico"))

        self.userDigitInput = QLineEdit()
        self.userDigitInput.setPlaceholderText("Put Your Digit Here ")
        self.userDigitInput.setFixedHeight(40)
        self.btnPress2 = QPushButton("Get Table")
        self.textEdit = QTextEdit()
        self.textEdit.setFontPointSize(18.0)

        layout = QVBoxLayout()

        layout.addWidget(self.userDigitInput)
        layout.addWidget(self.btnPress2)
        layout.addWidget(self.textEdit)
        self.setLayout(layout)

        self.btnPress2.clicked.connect(self.btnPress2_Clicked)
        
        
    def btnPress2_Clicked(self):
        returnedResult =  mainFuntion(self)
        self.textEdit.setText(returnedResult)











def mainFuntion(win):
    print("Hmm")
    sthirValue = userInput = int(win.userDigitInput.text())
    
    
    
    programPara = userInput
    muchLines = 10
    val = programPara
    num = 1

    resultList = []

    while val < (sthirValue*muchLines+1):
        resultList.append(str(sthirValue)+" ⨯ "+str(num)+" = "+str(val))
        num += 1
        val += sthirValue

    finalResult = '\n'.join(map(str, resultList))
    
    return finalResult









if __name__ == '__main__':
    app = QApplication(sys.argv)
    win = TextEditDemo()
    win.show()
    sys.exit(app.exec_())


