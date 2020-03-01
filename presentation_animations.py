from manimlib.imports import *
import numpy as np


class Shapes(Scene):

    def construct(self):
        circle = Circle()
        square = Square()
        line = Line(np.array([3, 0, 0]), np.array([5, 0, 0]))
        triangle = Polygon(np.array([0, 0, 0]), np.array([1, 1, 0]), np.array([1, -1, 0]))

        self.add(line)
        self.play(ShowCreation(circle))
        self.play(FadeOut(circle))
        self.play(GrowFromCenter(square))
        self.play(Transform(square, triangle))


class BasicEquations(Scene):

    def construct(self):
        text1 = TextMobject("Vector auto-regressive process is defined as:")
        text1.shift(UP*2)
        eq1 = TextMobject("$y_{t}=\mathbf{c}+\mathbf{A}_{1}\mathbf{y}_{{t-1}}+\mathbf{A}_{2}\mathbf{y}_{{t-2}}+\cdots +\mathbf{A}_{p}\mathbf{y}_{{t-p}}+\mathbf{e}_{t}$")
        eq2 = TextMobject("This allows us to model linear relationships in multivariate data.")
        eq2.shift(DOWN*2)

        self.play(Write(text1))
        self.play(Write(eq1))
        self.play(Write(eq2))
        self.wait(30)


class DickeyFuller(Scene):

    def construct(self):
        text1 = TextMobject("Augmented Dickey-Fuller Test was performed on the clean data.")
        text1.shift(UP*2)
        text2 = TextMobject("This gave that all columns are stationary with the exception of columns:")
        text2.shift(UP*1)

        non_stat0 = TextMobject("Flow Rate Indicating 8")
        non_stat1 = TextMobject("Pressure Difference 27")
        non_stat2 = TextMobject("Pressure Indicating 42")
        non_stat3 = TextMobject("Pressure Indicating 44")
        non_stat4 = TextMobject("Pressure Emergency Action 63")
        non_stat5 = TextMobject("Temperature Indicating 120")
        non_stat6 = TextMobject("Unknown Computing 132")
        non_stat7 = TextMobject("Classified Indicating 185")
        non_stat8 = TextMobject("Classified Indicating 187")
        non_stat9 = TextMobject("Pressure Difference 200")

        text4 = TextMobject("Solution: difference the data.")
        text4.shift(DOWN*3)

        self.play(Write(text1))
        self.play(Write(text2))

        self.play(Write(text4))

        self.play(Write(non_stat0))
        self.play(ReplacementTransform(non_stat0, non_stat1))
        self.play(ReplacementTransform(non_stat1, non_stat2))
        self.play(ReplacementTransform(non_stat2, non_stat3))
        self.play(ReplacementTransform(non_stat3, non_stat4))
        self.play(ReplacementTransform(non_stat4, non_stat5))
        self.play(ReplacementTransform(non_stat5, non_stat6))
        self.play(ReplacementTransform(non_stat6, non_stat7))
        self.play(ReplacementTransform(non_stat7, non_stat8))
        self.play(ReplacementTransform(non_stat8, non_stat9))

        self.wait(30)


class DickeyFuller(Scene):

    def construct(self):
        text1 = TextMobject("Augmented Dickey-Fuller Test was performed on the clean data.")
        text1.shift(UP*2)
        text2 = TextMobject("This gave that all columns are stationary with the exception of columns:")
        text2.shift(UP*1)

        non_stat0 = TextMobject("Flow Rate Indicating 8")
        non_stat1 = TextMobject("Pressure Difference 27")
        non_stat2 = TextMobject("Pressure Indicating 42")
        non_stat3 = TextMobject("Pressure Indicating 44")
        non_stat4 = TextMobject("Pressure Emergency Action 63")
        non_stat5 = TextMobject("Temperature Indicating 120")
        non_stat6 = TextMobject("Unknown Computing 132")
        non_stat7 = TextMobject("Classified Indicating 185")
        non_stat8 = TextMobject("Classified Indicating 187")
        non_stat9 = TextMobject("Pressure Difference 200")

        text4 = TextMobject("Solution: difference the data.")
        text4.shift(DOWN*3)

        self.play(Write(text1))
        self.play(Write(text2))

        self.play(Write(text4))

        self.play(Write(non_stat0))
        self.play(ReplacementTransform(non_stat0, non_stat1))
        self.play(ReplacementTransform(non_stat1, non_stat2))
        self.play(ReplacementTransform(non_stat2, non_stat3))
        self.play(ReplacementTransform(non_stat3, non_stat4))
        self.play(ReplacementTransform(non_stat4, non_stat5))
        self.play(ReplacementTransform(non_stat5, non_stat6))
        self.play(ReplacementTransform(non_stat6, non_stat7))
        self.play(ReplacementTransform(non_stat7, non_stat8))
        self.play(ReplacementTransform(non_stat8, non_stat9))

        self.wait(30)


class AE(Scene):

    def construct(self):

        title = TextMobject("Autoencoder Architecture")
        title.shift(DOWN*3.5)

        input_label = TextMobject("$\mathbf{x}$")
        output_label = TextMobject("$\mathbf{x}^\prime$")
        latent_label = TextMobject('$z$')

        rectange_input = Rectangle(height=5, width=1, fill_color=GREEN, fill_opacity=1, color=GREEN)
        rectange_output = Rectangle(height=5, width=1, fill_color=BLUE, fill_opacity=1, color=BLUE)

        latent_shape = Rectangle(height=0.5, width=0.5, fill_color=RED, color=RED, fill_opacity=1)

        input_label.shift(LEFT*6)
        output_label.shift(RIGHT*6)

        rectange_input.shift(LEFT*6)
        rectange_output.shift(RIGHT*6)

        final_arrow = Arrow(rectange_input, rectange_output)

        encoder_label = TextMobject("$g_\\phi$")
        decoder_label = TextMobject("$f_\\theta$")

        encoder_label.shift(LEFT*2.5)
        decoder_label.shift(RIGHT*2.5)

        encoder_shape = Polygon([0, 1, 0], [1, 0.5, 0], [1, -0.5, 0], [0, -1, 0], fill_color=GREEN, fill_opacity=1, color=GREEN)
        decoder_shape = Polygon([0, 1, 0], [-1, 0.5, 0], [-1, -0.5, 0], [0, -1, 0], fill_color=BLUE, fill_opacity=1, color=BLUE)

        encoder_shape.shift(LEFT*3)
        decoder_shape.shift(RIGHT*3)

        input_encoder_arrow = Arrow(rectange_input.get_edge_center(RIGHT), encoder_shape.get_edge_center(LEFT))
        encoder_latent_arrow = Arrow(encoder_shape.get_edge_center(RIGHT), latent_shape.get_edge_center(LEFT))
        latent_decoder_arrow = Arrow(latent_shape.get_edge_center(RIGHT), decoder_shape.get_edge_center(LEFT))
        decoder_output_arrow = Arrow(decoder_shape.get_edge_center(RIGHT), rectange_output.get_edge_center(LEFT))

        reconstruct_text = TextMobject("Attempt to reconstruct $\mathbf{x} \\approx \mathbf{x}^\prime$")
        reconstruct_text.shift(UP*3.1)

        final_text = TextMobject("The key is reconstruction error $||\mathbf{x} - \mathbf{x}^\prime||^2$")
        final_text.shift(UP*3.1)

        anomaly_text = TextMobject()

        shape_group = VGroup(rectange_input, rectange_output, latent_shape, encoder_shape, decoder_shape)
        text_group = VGroup(input_label, output_label, latent_label, encoder_label, decoder_label)

        self.play(Write(title))
        self.play(FadeIn(shape_group))
        self.play(FadeIn(text_group))

        self.play(GrowArrow(input_encoder_arrow))
        self.play(GrowArrow(encoder_latent_arrow))
        self.play(GrowArrow(latent_decoder_arrow))
        self.play(GrowArrow(decoder_output_arrow))

        self.play(GrowArrow(final_arrow))
        self.play(FadeIn(reconstruct_text))
        self.wait(5)

        self.play(Transform(reconstruct_text, final_text))
        self.wait(30)


class AE(Scene):

    def construct(self):

        title = TextMobject("Autoencoder Architecture")
        title.shift(DOWN*3.5)

        input_label = TextMobject("$\mathbf{x}$")
        output_label = TextMobject("$\mathbf{x}^\prime$")
        latent_label = TextMobject('$z$')

        rectange_input = Rectangle(height=5, width=1, fill_color=GREEN, fill_opacity=1, color=GREEN)
        rectange_output = Rectangle(height=5, width=1, fill_color=BLUE, fill_opacity=1, color=BLUE)

        latent_shape = Rectangle(height=0.5, width=0.5, fill_color=RED, color=RED, fill_opacity=1)

        input_label.shift(LEFT*6)
        output_label.shift(RIGHT*6)

        rectange_input.shift(LEFT*6)
        rectange_output.shift(RIGHT*6)

        final_arrow = Arrow(rectange_input, rectange_output)

        encoder_label = TextMobject("$g_\\phi$")
        decoder_label = TextMobject("$f_\\theta$")

        encoder_label.shift(LEFT*2.5)
        decoder_label.shift(RIGHT*2.5)

        encoder_shape = Polygon([0, 1, 0], [1, 0.5, 0], [1, -0.5, 0], [0, -1, 0], fill_color=GREEN, fill_opacity=1, color=GREEN)
        decoder_shape = Polygon([0, 1, 0], [-1, 0.5, 0], [-1, -0.5, 0], [0, -1, 0], fill_color=BLUE, fill_opacity=1, color=BLUE)

        encoder_shape.shift(LEFT*3)
        decoder_shape.shift(RIGHT*3)

        input_encoder_arrow = Arrow(rectange_input.get_edge_center(RIGHT), encoder_shape.get_edge_center(LEFT))
        encoder_latent_arrow = Arrow(encoder_shape.get_edge_center(RIGHT), latent_shape.get_edge_center(LEFT))
        latent_decoder_arrow = Arrow(latent_shape.get_edge_center(RIGHT), decoder_shape.get_edge_center(LEFT))
        decoder_output_arrow = Arrow(decoder_shape.get_edge_center(RIGHT), rectange_output.get_edge_center(LEFT))

        reconstruct_text = TextMobject("Attempt to reconstruct $\mathbf{x} \\approx \mathbf{x}^\prime$")
        reconstruct_text.shift(UP*3.1)

        final_text = TextMobject("The key is reconstruction error $||\mathbf{x} - \mathbf{x}^\prime||^2$")
        final_text.shift(UP*3.1)

        anomaly_text = TextMobject()

        shape_group = VGroup(rectange_input, rectange_output, latent_shape, encoder_shape, decoder_shape)
        text_group = VGroup(input_label, output_label, latent_label, encoder_label, decoder_label)

        self.play(Write(title))
        self.play(FadeIn(shape_group))
        self.play(FadeIn(text_group))

        self.play(GrowArrow(input_encoder_arrow))
        self.play(GrowArrow(encoder_latent_arrow))
        self.play(GrowArrow(latent_decoder_arrow))
        self.play(GrowArrow(decoder_output_arrow))

        self.play(GrowArrow(final_arrow))
        self.play(FadeIn(reconstruct_text))
        self.wait(5)

        self.play(Transform(reconstruct_text, final_text))
        self.wait(30)


class VAE(Scene):

    def construct(self):

        title = TextMobject("Autoencoder Architecture")
        title.shift(DOWN*3.5)

        input_label = TextMobject("$\mathbf{x}$")
        output_label = TextMobject("$\mathbf{x}^\prime$")
        latent_label = TextMobject('$z$')

        rectange_input = Rectangle(height=5, width=1.5, fill_color=GREEN, fill_opacity=1, color=GREEN)
        rectange_output = Rectangle(height=5, width=1.5, fill_color=BLUE, fill_opacity=1, color=BLUE)

        latent_shape = Rectangle(height=0.75, width=1.5, fill_color=RED, color=RED, fill_opacity=1)

        input_label.shift(LEFT*6)
        output_label.shift(RIGHT*6)

        rectange_input.shift(LEFT*6)
        rectange_output.shift(RIGHT*6)

        final_arrow = Arrow(rectange_input, rectange_output)

        encoder_label = TextMobject("$g_\\phi$")
        decoder_label = TextMobject("$f_\\theta$")

        encoder_label.shift(LEFT*2.5)
        decoder_label.shift(RIGHT*2.5)

        encoder_shape = Polygon([0, 1, 0], [1, 0.5, 0], [1, -0.5, 0], [0, -1, 0], fill_color=GREEN, fill_opacity=1, color=GREEN)
        decoder_shape = Polygon([0, 1, 0], [-1, 0.5, 0], [-1, -0.5, 0], [0, -1, 0], fill_color=BLUE, fill_opacity=1, color=BLUE)

        encoder_shape.shift(LEFT*3)
        decoder_shape.shift(RIGHT*3)

        input_encoder_arrow = Arrow(rectange_input.get_edge_center(RIGHT), encoder_shape.get_edge_center(LEFT))
        encoder_latent_arrow = Arrow(encoder_shape.get_edge_center(RIGHT), latent_shape.get_edge_center(LEFT))
        latent_decoder_arrow = Arrow(latent_shape.get_edge_center(RIGHT), decoder_shape.get_edge_center(LEFT))
        decoder_output_arrow = Arrow(decoder_shape.get_edge_center(RIGHT), rectange_output.get_edge_center(LEFT))

        reconstruct_text = TextMobject("Attempt to reconstruct $\mathbf{x} \\approx \mathbf{x}^\prime$")
        reconstruct_text.shift(UP*3.1)

        final_text = TextMobject("The key is reconstruction error $||\mathbf{x} - \mathbf{x}^\prime||^2$")
        final_text.shift(UP*3.1)

        shape_group = VGroup(rectange_input, rectange_output, latent_shape, encoder_shape, decoder_shape)
        text_group = VGroup(input_label, output_label, latent_label, encoder_label, decoder_label)

        all_group = VGroup(shape_group, text_group, input_encoder_arrow, encoder_latent_arrow, latent_decoder_arrow, decoder_output_arrow, title)

        new_latent_text = TextMobject('$p(\mathbf{z}|\mathbf{x})$')
        new_output_text = TextMobject('$p(\mathbf{x}|\mathbf{z})$')
        new_title = TextMobject('Variational Autoencoder Architecture')

        new_final_text = TextMobject("New objective function: $log P(X) - D_{KL}[Q(z \\vert X) || P(z \\vert X)]$")
        new_final_text.shift(UP*3.1)

        new_output_text.shift(RIGHT*6)
        new_title.shift(DOWN*3.5)

        vae_group = VGroup(shape_group, input_encoder_arrow, encoder_latent_arrow, latent_decoder_arrow, decoder_output_arrow, input_label, encoder_label, decoder_label, new_latent_text, new_output_text, new_title)

        self.play(FadeIn(all_group))
        self.wait(3)
        self.play(Transform(all_group, vae_group))
        self.wait(3)
        self.play(GrowArrow(final_arrow))
        self.play(FadeIn(new_final_text))
        self.wait(60)
