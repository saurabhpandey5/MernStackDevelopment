# Step 1 Step Turtle
import turtle
# Create a turtle object
t = turtle.Turtle()
turtle.Screen().bgcolor("black")

# Set the screen size
turtle.setup(width=1200, height=800)

# Set the pen color and size
t.pensize(2)
t.pencolor("gold")
# Step 2 Draw Lord Ram's 49 names around the central 
nickname = ["रामेश्वर", "जानकीवल्लभ", "जगदीश्वर", "रघुवंशनंदन", "मांगलिक",
"जनकनंदन", "सीतापति", "शीघ्र-विनाशक", "शुभ", "भक्तवत्सल", "रामचन्द्र",
"श्रीराम", "सीताराम", "प्रभु", "सीतासुखदाता", "जनकसुता", "जनकनन्दन",
"रामपुंज", "मारुतिसुत", "वानरेश्वर", "महावीर", "अव्यय", "परमात्मा",
"श्रीरङ्गमालिन्", "साकेतधाम", "श्रीवल्लभ", "राजीवलोचन", "आदिपुरुष",
"सीतानुज", "सीतारामानुज", "जय", "सीताशोकविनाशक", "महाभग्यवती", "धर्मवत्सल",
"सावित्रीसुत", "अगस्त्यप्रिय", "राम-धूत", "अज", "जीतेन्द्रिय", "विश्वास",
"सर्वभूतात्मा", "सुमित्रापुत्र", "सानुकः", "सुखदायक", "महाकवि",
"श्रीमान्", "दाशरथि", "राजीवनेत्र", "श्रीमदङ्गदार्य", "सर्वगुणसम्पन्न",
"रघुकुलनंदन", "श्रीदण्डकारण्यवासी", "श्रीपादराज", "मुक्तिदायक", "सर्वदायक",
"विवेक", "विवेकवान", "महातेजाः", "प्रणतार्तिहर", "आदिमूर्ति", "सच्चिदानन्दविग्रहः",
"श्र",]

# Step 3 Set 360 angle
angle = 360/49
t.penup()
t.sety(-1)
for i in range(50):
    t.left(angle)
    t.forward(260)
    t.write(nickname[i], align="right", font=("Arial", 12, "bold"))
    t.backward(260)

# Set the font properties
t.penup()
t.goto(-40, -20)
t.pendown()
t.write("|| राम ||", font=("Arial", 60, "normal"), align="center")

