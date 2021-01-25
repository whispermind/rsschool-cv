# Bohdan Paliantsa

***feel free to ask*** 

## Contacts:
  1. **Telegram:** @Stolenville
  1.	**Viber:** +380978307795
  1.	**E-mail:** h4vefun.dieyoung@gmail.com

## Expierence:


### Work Space
> **co-founder, top manager**
> 2016-08 - 2020-10


## Education:


### Khmelnytskyi polytechnic college 
> **Upper-Secondary Education in Production Management**
> 2009 - 2013


### Lviv polytechnic national university
> **BA in Management of foreign economic activity**
> 2013 - 2017
> **Master in Management of foreign economic activity**
> 2017-2018

  
## Certifications:


** IT Step **
> Software delelopment
> 2018.01 - 2020.05


** CISCO **
> IT Essentials 
> 2018.01 - 2018.06


** Stfalcon academy **
> Front-end development
> 2021.02 - 2021.06


** RS school **
> Front-end development
> 2021-02 - 2021-07


** Ola language school **
> English language
> 2017.03 - 2020.05

 
** Skills **
> ES6, HTML/CSS, SASS/LESS, GULP, NPM
> C++/C#, PHP(BASICS), MySQL(BASICS)
> OOP, SOLID, KISS, MVP, Git/GitHub
> English -Intermediate, Russian - native, Ukrainian - native, Polish - Elementary


## Code example 
```
class _Arc:public Curve
{
protected:
	Point Central;
public:
	_Arc() {}
	_Arc(double a, double b, double a1, double b1, double a2, double b2) :Curve(a, b, a1, b1) { Central.setPointX(a2); Central.setPointY(b2);  };

	void setBegginingX(double a) { Beggining.setPointX(a); }
	void setBegginingY(double b) { Beggining.setPointY(b); }
	void setCentralX(double a) { Central.setPointX(a); }
	void setCentralY(double b) { Central.setPointY(b); }
	void setEndX(double a1) { End.setPointX(a1); }
	void setEndY(double b1) { End.setPointY(b1); }
	
	double getBegginingX() { return Beggining.getPointX(); }
	double getBegginingY() { return Beggining.getPointY(); }
	double getCentralX() { return Central.getPointX(); }
	double getCentralY() { return Central.getPointY(); }
	double getEndX() { return End.getPointX(); }
	double getEndY() { return End.getPointY(); }


	double Radius()
	{
		double Chord = sqrt(pow((End.getPointX() - Beggining.getPointX()), 2) + pow((End.getPointY() - Beggining.getPointY()), 2));

		double	Hypotenuse = abs(sqrt(pow((Central.getPointX() - Beggining.getPointX()), 2) + pow((Central.getPointY() - Beggining.getPointY()), 2)));
		double PHeron = (2 * Hypotenuse + Chord)/2;
		double HeronS = sqrt(PHeron*(PHeron - Hypotenuse)*(PHeron - Hypotenuse)*(PHeron - Chord));
		double High = 2 * HeronS / Chord;
		/*double High = pow(Hypotenuse, 2) - pow((Chord / 2), 2);
		High = sqrt(High);*/
		double Radius = (High / 2)+ (pow(Chord, 2) / (8 * High));


		return Radius;
	}

	double Angle()
	{
		double Chord = sqrt(pow((End.getPointX() - Beggining.getPointX()), 2) + pow((End.getPointY() - Beggining.getPointY()), 2));
		double	Hypotenuse = abs(sqrt(pow((Central.getPointX() - Beggining.getPointX()), 2) + pow((Central.getPointY() - Beggining.getPointY()), 2)));
		/*double High = pow(Hypotenuse, 2) - pow((Chord / 2), 2);
		High = sqrt(High);*/
		double PHeron = (2 * Hypotenuse + Chord) / 2;
		double HeronS = sqrt(PHeron*(PHeron - Hypotenuse)*(PHeron - Hypotenuse)*(PHeron - Chord));
		double High = 2 * HeronS / Chord;
		double Radius = (High / 2) + (pow(Chord, 2) / (8 * High));
		double Angle = 2 * asin(Chord/(2*Radius));
		Angle = Angle/PI*180;
	
		return Angle;
	}

	double Lenght()
	{
		double Chord = sqrt(pow((End.getPointX() - Beggining.getPointX()), 2) + pow((End.getPointY() - Beggining.getPointY()), 2));
		double	Hypotenuse = abs(sqrt(pow((Central.getPointX() - Beggining.getPointX()), 2) + pow((Central.getPointY() - Beggining.getPointY()), 2)));
		double PHeron = (2 * Hypotenuse + Chord) / 2;
		double HeronS = sqrt(PHeron*(PHeron - Hypotenuse)*(PHeron - Hypotenuse)*(PHeron - Chord));
		double High = 2 * HeronS / Chord;
		/*double High = pow(Hypotenuse, 2) - pow((Chord / 2), 2);
		High = sqrt(High);*/
		double Radius = (High / 2) + (pow(Chord, 2) / (8 * High));
		double Angle = 2 * asin(Chord / (2 * Radius));
		double lenght = Angle * Radius;
		return lenght;
	}

	void ArcBezier()
	{
		HWND hWnd = GetConsoleWindow();

		HDC hDC = GetDC(hWnd);

		SelectObject(hDC, GetStockObject(WHITE_PEN));

		double t = 0;

		do

		{

			int x = (pow((1 - t), 2)*Beggining.getPointX()) + ((2 * t)*(1 - t)*Central.getPointX()) + (pow(t, 2)*End.getPointX());

			int y = (pow((1 - t), 2)*Beggining.getPointX()) + ((2 * t)*(1 - t)*Central.getPointY()) + (pow(t, 2)*End.getPointY());

			SetPixel(hDC, x, y, RGB(117, 55, 211));

			t = t + 0.00001;

		} while (t < 1);

	};

	void show()
	{
		double Chord = sqrt(pow((End.getPointX() - Beggining.getPointX()), 2) + pow((End.getPointY() - Beggining.getPointY()), 2));
		double	Hypotenuse = sqrt(pow((Central.getPointX() - Beggining.getPointX()), 2) + pow((Central.getPointY() - Beggining.getPointY()), 2));

		double PHeron = (Hypotenuse+Hypotenuse + Chord) / 2;
		double HeronS = sqrt(PHeron*(PHeron - Hypotenuse)*(PHeron - Hypotenuse)*(PHeron - Chord));
		double High = 2 * HeronS / Chord;
		/*double High = pow(Hypotenuse, 2) - pow((Chord / 2), 2);
		High = sqrt(High);*/
		double Radius = (High / 2) + (pow(Chord, 2) / (8 * High));
		double Angle = 2 * asin(Chord / (2 * Radius));
		double lenght = Angle * Radius;
		cout << "Chord: " << Chord << endl;
		cout << "High: " << High << endl;
		cout << "Radius: " << Radius << endl;
		cout << "Angle: " << Angle / PI * 180 << endl;
		cout << "Lenght: " << lenght << endl;
	}
};

```
> [**watch for more**](github.com/whispermind)

